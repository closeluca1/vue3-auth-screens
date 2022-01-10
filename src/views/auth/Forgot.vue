<template>
  <div class="container mt-5">
    <section class="row">

      <div class="col-md-6 bg-primary py-4 rounded-start">
        <h2 class="text-secondary fw-bold mx-4"><span class="text-info">Stud</span>Ying</h2>

        <Thumb :thumbImg="thumbImg"/>
      </div>

      <div class="col-md-5 bg-secondary py-5 rounded-end">
        <h3 class="text-light text-center mb-0 pt-4">Forgot Password</h3>
        <p class="text-light text-center mb-5">What is the registered email?</p>

        <form class="px-4 mb-5">
          <Input label="Email address" icon="@" type="email" placeholder="Enter Email"/>
          <div class="d-grid gap-2 mt-2">
            <button type="submit" class="btn text-light btn-info border-0">Send</button>
          </div>
        </form>

      </div>

    </section>
  </div>
</template>

<script>
import Input from '@/components/auth/Input.vue'
import Thumb from '../../components/auth/Thumb.vue';
import imgThumb from '@/assets/thumb-forgot.svg'
export default {
  name: "Login",
  components: {
    Input,
    Thumb,
  },
  data() {
    return {
      thumbImg: imgThumb
    }
  }
};
</script>
