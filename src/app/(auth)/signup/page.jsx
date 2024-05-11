"use client"
import React from 'react'
import Link from 'next/link'
import useAuth from "@/src/hooks/useAuth"
import {useForm} from "react-hook-form"
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter()
  const { signUp } = useAuth()
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm()

  // submit handler
  const doRegister = async (formData) => {
    await signUp({ email: formData.email, password: formData.password })
    router.push("/")
  }

  return (
    <>
      {/* TODO: validation */}
      <form onSubmit={handleSubmit(doRegister)}>
        <label htmlFor="email">メールアドレス</label>
        <input type="email" id="email" {...register("email", { required: true })} />

        <label htmlFor="password">パスワード</label>
        <input type="password" id="password" {...register("password", { required: true })} />

        <input type="submit" />
      </form>
    </>
  )
}

export default page
