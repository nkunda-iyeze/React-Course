import '../App.css';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup';
const Form = () => {
    const schema = yup.object().shape({
        fullName: yup.string().required("your name is required"),
        email: yup.string().email().required("invalid email"),
        age: yup.number().positive().integer().min(18).max(100).required("Please put valid age"),
        password: yup.string().min(4).max(20).required(),
        confirmPassword:yup.string().oneOf([yup.ref("password"),null],"Password Don't Match").required()
    });
    const { register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
    }
  return (
      <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Full Name..." {...register("fullName")} />
          <span>{errors.fullName?.message}</span>
          <input type="text" placeholder="Email" {...register("email")} />
          <span>{errors.email?.message}</span>
          <input type="number" placeholder="Age" {...register("age")} />
          <span>{errors.age?.message}</span>
          <input type="password" placeholder="Password..." {...register("password")} />
          <span>{errors.password?.message}</span>
          <input type="password" placeholder="Confirm Password..."  {...register("confirmPassword")} />
          <span>{errors.confirmPassword?.message}</span>
          <input type="submit"/>
      </form>
  )
}

export default Form