import { Formik, Form, FieldArray } from 'formik';
import * as Yup from 'yup';
import { Input, Button, Form as AntForm } from 'antd';
import { BlogHook } from '../hooks/BlogHook';
import { FlatButton } from '../../shared/FlatButton';

const { TextArea } = Input;

type SecType = {
  subject: string;
  features: string[];
};

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
      .min(200, 'Description must be at least 200 characters')
      .max(1000, 'Description must not be more than 1000 characters')
      .test(
    'not-only-spaces',
    'Description cannot be just whitespace',
    (val) => typeof val === 'string' && val.trim().length > 0
    )

  });

  return (
    <section>
      <div className="container-fluid">
        <h2>Add New Blog</h2>
        <Formik

          initialValues={{
            title: '',
            description: '',
            section: [{ subject: '', features: [''] }],
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true);

            const trimmedValues = {
              title: values.title.trim(),
              description: values.description.trim(),
              sections: values.section,
            };

            console.log(trimmedValues);
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
            <Form
           >
              {/* Title */}
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

              {/* Description */}
              <AntForm.Item
               
                validateStatus={
                  touched.description && errors.description ? 'error' : ''
                }
                help={
                  touched.description && errors.description
                    ? errors.description
                    : ''
                }
              >
                <TextArea
                  name="description"
                  placeholder="Blog"
                  rows={6}
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </AntForm.Item>

              {/* Sections */}
              <FieldArray name="section">
                {({ push, remove }) => (
                  <div>
                    {values.section.map((sec: SecType, index: number) => (
                      <div
                        key={index}
                        style={{
                          marginBottom: '1rem',
                          padding: '1rem',
                          border: '1px solid #ccc',
                        }}
                      >
                        {/* Subject */}
                        <AntForm.Item >
                          <Input
                            name={`section[${index}].subject`}
                            placeholder="Subject"
                            value={sec.subject}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </AntForm.Item>

                        {/* Features */}
                        <FieldArray name={`section[${index}].features`}>
                          {(featureHelpers) => (
                            <div>
                              {sec.features.map(
                                (feature: string, fIndex: number) => (
                                  <div
                                    key={fIndex}
                                    style={{
                                      display: 'flex',
                                      marginBottom: '0.5rem',
                                    }}
                                  >
                                    <Input
                                      name={`section[${index}].features[${fIndex}]`}
                                      placeholder="Feature"
                                      value={feature}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      style={{ marginRight: '0.5rem' }}
                                    />
                                    <FlatButton
                                      type="button"
                                      onClick={() => featureHelpers.remove(fIndex)}
                                    >
                                      -
                                    </FlatButton>
                                  </div>
                                )
                              )}
                              <div style={{ marginBottom: '10px' }}>
                                <FlatButton
                                  type="button"
                                  onClick={() => featureHelpers.push('')}
                                >
                                  + Add Feature
                                </FlatButton>
                              </div>
                            </div>
                          )}
                        </FieldArray>

                        {/* Remove section */}
                        <FlatButton
                          type="button"
                          onClick={() => remove(index)}
                        >
                          - Remove Section
                        </FlatButton>
                      </div>
                    ))}

                    {/* Add section */}
                    <div style={{ marginBottom: '10px' }}>
                      <FlatButton
                        type="button"
                        onClick={() =>
                          push({ subject: '', features: [''] })
                        }
                      >
                        + Add Section
                      </FlatButton>
                    </div>
                  </div>
                )}
              </FieldArray>

              {/* Submit */}
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
