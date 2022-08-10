import axios from "axios";
import { useFormik } from "formik";
import styled from "styled-components";

const ContactHeader = styled.h1`
    font-family: "Apercu Arabic Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 130%;
    margin: 0 0 30px 0;
    color: #3e3e3e;
    @media (max-width: 450px) {
        font-size: 30px;
    }
`;

const FormGroup = styled.form`
    display: flex;
    flex-direction: column;
    padding: 3px;
    flex: 1;
`;

const TextAreaField = styled.textarea`
    background: #ffffff;
    border: 1px solid #dcdcdc;
    border-radius: 10px;
    box-sizing: border-box;
    margin-bottom: 8px;
    padding-top: 31px;
    padding-left: 46px;
    font-family: "Apercu Arabic Pro";
    font-style: normal;
    font-weight: 400;
    line-height: 180%;
    font-size: 18px;
    color: #2d2d2d;
    height: 189px;
    width: 557px;
    resize: none;
    ::placeholder {
        position: fixed;
        top: 31px;
        left: 46px;
        font-family: "Apercu Arabic Pro";
        font-style: normal;
        font-weight: 400;
        line-height: 180%;
        font-size: 18px;
        color: #2d2d2d;
    }
    @media (max-width: 800px) {
        width: 400px;
        height: 120px;
        font-size: 15px;
        padding-left: 25px;
        padding-top: 18px;
        ::placeholder {
            top: 18px;
            left: 25px;
            font-size: 15px;
        }
    }
    @media (max-width: 450px) {
        width: 300px;
        height: 100px;
        font-size: 13px;
        padding-left: 15px;
        padding-top: 9px;
        ::placeholder {
            top: 10px;
            left: 15px;
            font-size: 13px;
        }
    }
`;

const InputField = styled.input`
    background: #ffffff;
    border: 1px solid #dcdcdc;
    border-radius: 10px;
    box-sizing: border-box;
    margin-bottom: 8px;
    padding-left: 46px;
    font-family: "Apercu Arabic Pro";
    font-style: normal;
    font-weight: 400;
    line-height: 180%;
    font-size: 18px;
    color: #2d2d2d;
    height: 93px;
    width: 557px;
    ::placeholder {
        position: fixed;
        top: 31px;
        left: 46px;
        font-family: "Apercu Arabic Pro";
        font-style: normal;
        font-weight: 400;
        line-height: 180%;
        font-size: 18px;
        color: #2d2d2d;
    }
    @media (max-width: 800px) {
        width: 400px;
        height: 60px;
        font-size: 15px;
        padding-left: 25px;
        ::placeholder {
            top: 23px;
            left: 25px;
            font-size: 15px;
        }
    }
    @media (max-width: 450px) {
        width: 300px;
        height: 40px;
        font-size: 13px;
        padding-left: 15px;
        ::placeholder {
            top: 10px;
            left: 15px;
            font-size: 13px;
        }
    }
`;

const FieldGroup = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3px;
    height: 100%;
    padding-bottom: 23px;
`;

const ContactForm = styled.div`
    position: absolute;
    width: 563px;
    height: 575px;
    left: 147px;
    top: 179px;
    @media (max-width: 800px) {
        width: 400px;
        left: 30px;
        top: 100px;
    }
    @media (max-width: 450px) {
        width: 300px;
        left: 10px;
        top: 100px;
    }
`;

const SubmitButton = styled.button`
    background: #fad34f;
    border-radius: 500px;
    border: none;
    width: 218px;
    height: 73px;
    font-family: "Apercu Arabic Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    color: #ffffff;
    cursor: pointer;
    transition: background-color 0.5s;
    :hover {
        background-color: #f472b7;
    }
    @media (max-width: 800px) {
        width: 400px;
    }
    @media (max-width: 450px) {
        width: 300px;
        height: 50px;
    }
`;

export const Form = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        onSubmit: (values) => {
            axios
                .post(
                    "https://nest-postgresql-api.herokuapp.com/api/feedback",
                    {
                        id: Date.now.toString(),
                        name: values.name,
                        email: values.email,
                        message: values.message,
                    }
                )
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    });
    return (
        <ContactForm>
            <ContactHeader>Reach out to us!</ContactHeader>
            <FormGroup onSubmit={formik.handleSubmit}>
                <FieldGroup>
                    <InputField
                        required
                        placeholder="Your name*"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        type="text"
                        id="name"
                        name="name"
                    />
                    <InputField
                        required
                        placeholder="Your e-mail*"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        type="email"
                        id="email"
                        name="email"
                    />
                    <TextAreaField
                        required
                        placeholder="Your message*"
                        onChange={formik.handleChange}
                        value={formik.values.message}
                        id="message"
                        name="message"
                    />
                </FieldGroup>
                <SubmitButton type="submit">Submit</SubmitButton>
            </FormGroup>
        </ContactForm>
    );
};
