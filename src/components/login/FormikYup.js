import * as Yup from 'yup'

export const LoginSchema =Yup.object({
    firstname:Yup.string().matches(/^[a-zA-Z]*$/,"Please Enter Valid FirstName").required("You must enter the alphabet"),
    lastname:Yup.string().matches(/^[a-zA-Z]*$/,"Please Enter Valid LastName").required("You must enter the alphabet"),
    email:Yup.string().min(2)
    .matches(/[\w]+[@][A-Z a-z]+[.][A-Z a-z]+[.]*[A-Z a-z]*/," Please Enter Valid Email ").required("You must enter the email address"),
    password:Yup.string()
    .matches(/[A-Z][\w]+[@#$!]+[\w][@#$!]*/,"Please enter a strong Password")
    // .matches(/[\w]+/,"Please enter a strong Password")
    .required("Password cannot be empty")
})