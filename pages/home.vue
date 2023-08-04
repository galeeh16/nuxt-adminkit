<template>
    <h1>Dashbord Page</h1>

    <div class="row mt-3">
        <div class="col-6">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Validation with Vee Validate (v4)</h4>
                </div>
                <div class="card-body">
                    <Form method="post" @submit="handleSubmit" :validation-schema="schema" v-slot="{ values }">

                        <div class=" mb-4">
                            <label for="" class="col-form-label">Username</label>
                            <Field type="text" name="username" label="Username Label" class="form-control" />
                            <ErrorMessage as="div" class="text-danger mt-1" name="username" />
                        </div>

                        <div class="mb-4">
                            <label for="" class="col-form-label">Full Name</label>
                            <Field type="text" name="full_name" label="Wkwkwk" class="form-control" />
                            <ErrorMessage as="div" class="text-danger mt-1" name="full_name" />
                        </div>

                        <div class="mb-4">
                            <label for="" class="col-form-label">Age</label>
                            <Field v-slot="{ field }" name="age" label="Age Label">
                                <input type="text" name="age" label="Age Label" v-bind="field" class="form-control" />
                            </Field>
                            <ErrorMessage as="div" class="text-danger mt-1" name="age" />
                        </div>

                        <div class="mb-4">
                            <label for="" class="col-form-label">Film</label>
                            <Field as="Multiselect" name="film" v-slot="{ field }">
                                <Multiselect v-bind="field" :options="filmOption" />
                                <ErrorMessage as="div" class="text-danger mt-1" name="film" />
                            </Field>
                        </div>

                        <div class="mb-4">
                            <div>
                                <label for="" class="col-form-label">Gender</label>
                            </div>
                            <Field v-slot="{ field }" name="gender" type="radio" value="male">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" value="male" name="gender" v-bind="field">
                                    <span class="form-check-label">
                                        Laki-Laki
                                    </span>
                                </label>
                            </Field>
                            <Field v-slot="{ field }" name="gender" type="radio" value="female">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" value="female" name="gender"
                                        v-bind="field">
                                    <span class="form-check-label">
                                        Perempuan
                                    </span>
                                </label>
                            </Field>
                            <ErrorMessage as="div" class="text-danger mt-1" name="gender" />
                        </div>

                        <div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>

                        <pre class="mt-5">
                            {{ values }}
                        </pre>
                    </Form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { object, string, number } from 'yup';
import Multiselect from '@vueform/multiselect';

const schema = object({
    username: string()
        .required().min(3).max(30)
        .matches(/^[\ \'\`a-zA-Z]*$/, { // karakter a-z A-Z'`
            message: 'Invalid character'
        }),
    full_name: string().required().min(3).max(50),
    age: number().required().positive().integer(),
    film: string().required(),
    gender: string().required(),
});

// https://github.com/vueform/multiselect#installation
const filmOption = ref([
    'Justice Leage',
    'Superman',
    'Iron Man',
    'Guardian of the Galaxy',
])

function handleSubmit(values) {
    console.log(values)
}
</script>