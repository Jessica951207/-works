using Scania.model;
using System;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Web;

namespace Scania.student_aid.handlers
{
    public class saveAid : IHttpHandler
    {
        public void ProcessRequest(HttpContext context)
        {
            context.Response.Clear();
            context.Response.ContentType = "application/json";

            string vcode = context.Request.Form["vcode"];
            string name = context.Request.Form["name"];
            string sex = context.Request.Form["sex"];
            string icard = context.Request.Form["icard"];
            string email = context.Request.Form["email"];
            string contactNo = context.Request.Form["contactNo"];
            string province = context.Request.Form["province"];
            string city = context.Request.Form["city"];
            string county = context.Request.Form["county"];
            string town = context.Request.Form["town"];
            string village = context.Request.Form["village"];
            string state = context.Request.Form["state"];
            HttpPostedFile diploma = context.Request.Files["diploma"];
            string schooling = context.Request.Form["schooling"];
            string honor = context.Request.Form["honor"];
            string familyNo = context.Request.Form["familyNo"];
            string workNo = context.Request.Form["workNo"];
            string income = context.Request.Form["income"];
            string expenditure = context.Request.Form["expenditure"];
            HttpPostedFile poor = context.Request.Files["poor"];
            string source = context.Request.Form["source"];
            string application = context.Request.Form["application"];

            if (context.Request.UrlReferrer != null &&
                !String.IsNullOrEmpty(vcode))
            {
                DataClassesDataContext db = new DataClassesDataContext();
                mobileVerifiyCode mobileVerifiyCode = db.mobileVerifiyCode.SingleOrDefault(t => String.Compare(t.tel, contactNo) == 0 && t.code == Convert.ToInt32(vcode) && t.expiresDate >= DateTime.Now);
                if (mobileVerifiyCode != null)
                {
                    mobileVerifiyCode.code = null;
                    mobileVerifiyCode.expiresDate = null;

                    studentAid studentAid = new studentAid();
                    studentAid.name = name;
                    studentAid.sex = sex;
                    studentAid.icard = icard;
                    studentAid.email = email;
                    studentAid.contactNo = contactNo;
                    studentAid.province = province;
                    studentAid.city = city;
                    studentAid.county = county;
                    studentAid.town = town;
                    studentAid.village = village;
                    studentAid.state = state;
                    studentAid.diploma = SaveFile(context, diploma);
                    studentAid.schooling = schooling;
                    studentAid.honor = honor;
                    studentAid.familyNo = familyNo;
                    studentAid.workNo = workNo;
                    studentAid.income = income;
                    studentAid.expenditure = expenditure;
                    studentAid.poor = SaveFile(context, poor);
                    studentAid.source = source;
                    studentAid.application = application;
                    db.studentAid.InsertOnSubmit(studentAid);
                    db.SubmitChanges();
                    context.Response.Write("{\"error\":\"\"}");
                }
                else
                    context.Response.Write("{\"error\":\"验证码错误\"}");
            }
            else
                context.Response.Write("{\"error\":\"不能直接访问此文件\"}");
        }

        private string SaveFile(HttpContext context, HttpPostedFile file)
        {
            if (file.ContentLength > 0)
            {
                string path = "/student_aid/upload/";
                string mapPath = context.Server.MapPath("~" + path);
                if (!Directory.Exists(mapPath))
                    Directory.CreateDirectory(mapPath);

                string strNameWithExtend = file.FileName.Substring(file.FileName.LastIndexOf('\\') + 1);
                string strNameWithoutExtend = strNameWithExtend.Substring(0, strNameWithExtend.LastIndexOf('.'));
                string strExtendName = strNameWithExtend.Substring(strNameWithExtend.LastIndexOf('.')).ToLower();

                strNameWithoutExtend = Guid.NewGuid().ToString("n").ToUpper();

                string filename = strNameWithoutExtend + strExtendName;

                string savePath = mapPath + filename;
                Stream stream = file.InputStream;
                byte[] byt = new byte[stream.Length];
                stream.Read(byt, 0, byt.Length);
                FileStream fs = new FileStream(savePath, FileMode.Create, FileAccess.Write);
                fs.Write(byt, 0, byt.Length);
                fs.Close();
                stream.Close();

                return path + filename;
            }
            else
                return null;
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