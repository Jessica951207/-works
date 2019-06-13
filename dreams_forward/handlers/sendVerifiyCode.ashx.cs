using Scania.model;
using System;
using System.Configuration;
using System.Linq;
using System.Web;
using Aliyun.Acs.Core;
using Aliyun.Acs.Core.Exceptions;
using Aliyun.Acs.Core.Profile;
using Aliyun.Acs.Dysmsapi.Model.V20170525;
using System.Text.RegularExpressions;

namespace Scania.student_aid.handlers
{
    public class sendVerifiyCode : IHttpHandler
    {
        public void ProcessRequest(HttpContext context)
        {
            context.Response.Clear();
            context.Response.ContentType = "application/json";
            string tel = context.Request.Form["tel"];

            string product = "Dysmsapi";
            string domain = "dysmsapi.aliyuncs.com";
            string accessKeyId = ConfigurationManager.AppSettings["aliyun_keyid"];
            string accessKeySecret = ConfigurationManager.AppSettings["aliyun_keysecret"];

            if (context.Request.UrlReferrer != null &&
                !String.IsNullOrEmpty(tel))
            {
                if (Regex.IsMatch(tel, @"^1[345789]\d{9}$", RegexOptions.Compiled))
                {
                    DataClassesDataContext db = new DataClassesDataContext();
                    mobileVerifiyCode mobileVerifiyCode = db.mobileVerifiyCode.SingleOrDefault(t => String.Compare(t.tel, tel) == 0);
                    bool isAddMobile = false;
                    if (mobileVerifiyCode == null) isAddMobile = true;
                    if (isAddMobile)
                    {
                        mobileVerifiyCode = new mobileVerifiyCode();
                        mobileVerifiyCode.tel = tel;
                    }
                    Random r = new Random(DateTime.Now.Millisecond);
                    mobileVerifiyCode.code = r.Next(100000, 999999);
                    mobileVerifiyCode.expiresDate = DateTime.Now.AddMinutes(15);
                    if (isAddMobile)
                        db.mobileVerifiyCode.InsertOnSubmit(mobileVerifiyCode);
                    db.SubmitChanges();

                    IClientProfile profile = DefaultProfile.GetProfile("cn-hangzhou", accessKeyId, accessKeySecret);
                    DefaultProfile.AddEndpoint("cn-hangzhou", "cn-hangzhou", product, domain);
                    IAcsClient acsClient = new DefaultAcsClient(profile);
                    SendSmsRequest request = new SendSmsRequest();
                    try
                    {
                        request.PhoneNumbers = Convert.ToString(mobileVerifiyCode.tel);
                        request.SignName = "斯堪尼亚";
                        request.TemplateCode = "SMS_126355545";
                        request.TemplateParam = "{\"code\":\"" + mobileVerifiyCode.code + "\"}";
                        SendSmsResponse sendSmsResponse = acsClient.GetAcsResponse(request);
                        context.Response.Write("{\"error\":\"\",\"msg\":\"" + sendSmsResponse.Message + "\"}");
                    }
                    catch (ServerException e)
                    {
                        context.Response.Write("{\"error\":\"" + e.Message + "\"}");
                    }
                    catch (ClientException e)
                    {
                        context.Response.Write("{\"error\":\"" + e.Message + "\"}");
                    }
                }
                else
                    context.Response.Write("{\"error\":\"不正确的手机号码\"}");
            }
            else
                context.Response.Write("{\"error\":\"不能直接访问此文件\"}");
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}