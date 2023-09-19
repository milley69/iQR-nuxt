<template>
  <div class="card flex-shrink-0 w-full pt-0">
    <form class="card-body p-0" @submit.prevent="console.log({ ...form })">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Имя пользователя</span>
        </label>
        <input type="text" placeholder="milley" v-model="form.username" class="input input-bordered" />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input
          type="text"
          placeholder="you@example.com"
          autocomplete="email"
          v-model="form.email"
          class="input input-bordered"
        />
      </div>
      <div class="form-control relative">
        <label class="label">
          <span class="label-text">Пароль</span>
          <span class="label-text-alt link link-hover">Забыли пароль?</span>
        </label>
        <input
          :type="isHidePasswd ? 'text' : 'password'"
          placeholder="••••••••"
          autocomplete="current-password"
          v-model="form.password"
          class="input input-bordered"
        />
        <span class="absolute right-3 bottom-1.5" @click="isHidePasswd = !isHidePasswd">
          <i
            class="bx bx-sm hover:text-opacity-100 cursor-pointer text-base-content"
            :class="isHidePasswd ? 'bx-show' : 'bx-hide text-opacity-50'"
          ></i>
        </span>
      </div>
      <div class="form-control mt-6">
        <button type="submit" class="btn btn-primary">Продолжить</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
const isHidePasswd = ref(false)
const form = reactive({
  username: '',
  email: '',
  password: '',
})
</script>
