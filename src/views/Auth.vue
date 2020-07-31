<template>
  <div class="auth">
    <AuthForm />
  </div>
</template>

<script>
// @ is an alias to /src
import AuthForm from "@/components/AuthForm.vue";

export default {
  name: "Auth",
  components: {
    AuthForm
  }
};
</script>
