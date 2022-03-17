import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "../../../Parts/Header";
import LastPart from "../../../Parts/LastPart/LastPart";
import "./Login.css";

import { gql, useMutation } from "@apollo/client";

const Login = () => {
  const [form, setForm] = useState({});

  const ADD_USER = gql`
    mutation ADD_USER(
      $firstName: String!
      $lastName: String!
      $username: String!
      $password: String!
      $emailAdd: String!
      $job: String!
    ) {
      createUser(
        data: {
          firstName: $firstName
          lastName: $lastName
          username: $username
          password: $password
          emailAdd: $emailAdd
          job: $job
        }
      ) {
        id
      }
    }
  `;

  const [createUser, { data, loading, error }] = useMutation(ADD_USER);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <div className="login">
      <Header title="My account" subTitle="My account" />
      <div class="container login-form my-5">
        <div className="row">
          <div className="col-md-5 mt-5">
            <h2 className="mb-3">Login</h2>
            <form className="login-form login" method="post">
              <p>
                <label for="username">
                  Username or email address&nbsp;<span class="required">*</span>
                </label>
                <input
                  className="form-control p-3"
                  type="text"
                  name="username"
                  id="username"
                  autocomplete="username"
                />
              </p>

              <p>
                <label for="password">
                  Password&nbsp;<span class="required">*</span>
                </label>
                <input
                  className="form-control p-3"
                  type="password"
                  name="password"
                  id="password"
                  autocomplete="current-password"
                />
              </p>

              <p>
                <label for="checkbox">
                  <input
                    className="p-3"
                    name="rememberme"
                    type="checkbox"
                    id="rememberme"
                    value="forever"
                  />
                  <span className="mx-3 m-0">Remember me</span>
                </label>
              </p>

              <button
                type="submit"
                className="product m-0 px-5"
                name="login"
                value="Log in"
              >
                Log in
              </button>

              <p class="mt-3">
                <NavLink className="items " to="#">
                  Lost your password?
                </NavLink>
              </p>
            </form>
          </div>

          <div className="col-md-5 mt-5">
            <h2 className="mb-3">Register</h2>
            <form
              className="login-form login"
              method="post"
              onSubmit={(e) => {
                e.preventDefault();
                const { firstname, lastname, username, password, email, job } =
                  form;

                createUser({
                  variables: {
                    firstName: firstname,
                    lastName: lastname,
                    username: username,
                    password: password,
                    emailAdd: email,
                    job: job
                  }
                }).catch((res) => {
                  const errors = res.graphQLErrors.map((error) => {
                    return error.message;
                  });

                  console.log(errors);
                });
              }}
            >
              <p>
                <label for="firstname">
                  First Name&nbsp;<span class="required">*</span>
                </label>
                <input
                  className="form-control p-3"
                  type="text"
                  name="firstname"
                  id="firstname"
                  onChange={(e) =>
                    setForm({ ...form, firstname: e.target.value })
                  }
                  value={form.firstName}
                />
              </p>
              <p>
                <label for="lastname">
                  Last Name&nbsp;<span class="required">*</span>
                </label>
                <input
                  className="form-control p-3"
                  type="text"
                  name="lastname"
                  id="lastname"
                  onChange={(e) =>
                    setForm({ ...form, lastname: e.target.value })
                  }
                  value={form.lastname}
                />
              </p>
              <p>
                <label for="username">
                  Username&nbsp;<span class="required">*</span>
                </label>
                <input
                  className="form-control p-3"
                  type="text"
                  name="username"
                  id="username"
                  onChange={(e) =>
                    setForm({ ...form, username: e.target.value })
                  }
                  value={form.username}
                />
              </p>
              <p>
                <label for="job">
                  Job&nbsp;<span class="required">*</span>
                </label>
                <input
                  className="form-control p-3"
                  type="text"
                  name="job"
                  id="job"
                  onChange={(e) => setForm({ ...form, job: e.target.value })}
                  value={form.job}
                />
              </p>
              <p>
                <label for="email">
                  Email address&nbsp;<span class="required">*</span>
                </label>
                <input
                  className="form-control p-3"
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  value={form.email}
                />
              </p>
              <p>
                <label for="password">
                  Password&nbsp;<span class="required">*</span>
                </label>
                <input
                  className="form-control p-3"
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  value={form.password}
                />
              </p>
              <button
                type="submit"
                className="product  px-5"
                name="login"
                value="Log in"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
      <LastPart />
    </div>
  );
};

export default Login;
