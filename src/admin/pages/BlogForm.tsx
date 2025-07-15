import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Input, Button, Form as AntForm } from 'antd';
import { BlogHook } from '../hooks/BlogHook';

const { TextArea } = Input;

export const BlogForm = () => {
    const { postBlog } = BlogHook();

    // Validation schema using Yup
   const validationSchema = Yup.object({
    title: Yup.string()
        .required('Title is required')
        .min(5, 'Title must be at least 5 characters')
        .max(60, 'Title cannot be more than 60 characters'),

    description: Yup.string()
        .required('Description is required')
        .min(200, 'Description must be at least 20 characters')
        .max(1000, 'Description must not be more than 500 characters')
        .trim('Description cannot include only whitespace'),
});

    return (
        <section>
            <div className="container-fluid">
                <h2>Add New Blog</h2>
                <Formik
                    initialValues={{ title: '', description: '' }}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    const trimmedValues = {
                        title: values.title.trim(),
                        description: values.description.trim(),
                    };
                    await postBlog(trimmedValues);
                    setSubmitting(false);
                    resetForm();
                }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        isSubmitting,
                    }) => (
                        <Form>
                            <AntForm.Item
                                validateStatus={touched.title && errors.title ? 'error' : ''}
                                help={touched.title && errors.title ? errors.title : ''}
                            >
                                <Input
                                    name="title"
                                    placeholder="Title"
                                    value={values.title}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </AntForm.Item>

                            <AntForm.Item
                                validateStatus={touched.description && errors.description ? 'error' : ''}
                                help={touched.description && errors.description ? errors.description : ''}
                            >
                                <TextArea
                                    name="description"
                                    placeholder="Blog"
                                    rows={4}
                                    value={values.description}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </AntForm.Item>

                            <Button
                                type="primary"
                                htmlType="submit"
                                loading={isSubmitting}
                                className="btndark"
                            >
                                Submit
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    );
};
