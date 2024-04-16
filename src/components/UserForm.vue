<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const user = ref({
  nickname: '',
  email: '',
  password: '',
  password_confirmation: ''
});

const router = useRouter();

const registerBtn = async() => {
  try {
    await axios.post('http://localhost:3000/register', user.value);
    router.push("/home");
  }catch(error) {
    console.log('データの保存ができませんでした', error);
  }
    }
</script>

<template>
  <h2>ユーザー登録</h2>

  <form>
    <label for="nickname">ニックネーム(必須)</label>
    <input type="text" id="nickname" class="input-field" name="nickname" v-model="user.nickname">

    <label for="email">メールアドレス(必須)</label>
    <input type="email" id="email" class="input-field" name="email" v-model="user.email">

    <label for="password">パスワード(必須)</label>
    <input type="password" id="password" name="password" v-model="user.password" class="input-field">

    <label for="password-confirmation">確認用パスワード(必須)</label>
    <input type="password" id="password-confirmation" name="password-confirmation" class="input-field" v-model="user.password_confirmation">

    <input type="submit" value="登録" id="submit-btn" @click.prevent="registerBtn">
  </form>
</template>

<style>
form {
  display: flex;
  flex-direction: column;
  width: 320px;
}

.input-field {
  padding: 8px;
  margin-bottom: 8px;
}

#submit-btn {
  width: 160px;
}

.error-message {
  color: red;
}
</style>