import { Form, Formik } from "formik";
import React from "react";
import CustomInput from "../components/CustomInput";
import { loginSchema } from "../components/schemas";
import CustomSelect from "../components/CustomSelect";
import CustomChecbox from "../components/CustomCheckbox";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};
export default function LoginForm() {
  return (
    <>
      <Formik
        initialValues={{
          username: "",
          university: "",
          isAccepted: false,
        }}
        onSubmit={onSubmit}
        validationSchema={loginSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput
              label="Kullanıcı Adı"
              name="username"
              type="text"
              placeholder="Kullanıcı Adınızı Giriniz"
            />
            <CustomSelect
              label="Üniversite Seçiniz"
              name="university"
              placeholder="Lütfen üniversitenizi Seçiniz"
            >
              <option value="">Lütfen Üniversitenizi Seçiniz</option>
              <option value="bogazici">Boğaziçi Üniversitesi</option>
              <option value="gsu">Galatasaray Üniversitesi</option>
              <option value="odtu">Orta Doğu Teknik Üniversitesi</option>
              <option value="itu">İstanbul Teknik Üniversitesi</option>
            </CustomSelect>
            <CustomChecbox
              name="isAccepted"
              type="checkbox"
              placeholder="Kullanıcı Adınızı Giriniz"
            />
            <button disabled={isSubmitting}>Giriş Yap</button>
            <Link to="/">Kayıt Ol</Link>
          </Form>
        )}
      </Formik>
    </>
  );
}
