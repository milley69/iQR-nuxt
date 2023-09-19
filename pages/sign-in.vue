<template>
  <section class="flex flex-1 min-h-[calc(100vh-4rem)]">
    <div class="flex flex-col items-center flex-1 flex-shrink-0 px-5 pt-16 pb-8 lg:border-r shadow-lg">
      <div class="flex-1 flex flex-col justify-center w-[330px] sm:w-[384px]">
        <div class="mb-10">
          <h1 class="mt-8 mb-2 text-2xl lg:text-3xl">{{ isLogin ? 'С возвращением' : 'Приветствуем' }}</h1>
          <h2 class="text-sm text-scale-1100">{{ isLogin ? 'Войдите в свой аккаунт' : 'Создайте свой аккаунт' }}</h2>
        </div>
        <div class="flex flex-col gap-5">
          <button class="btn btn-ghost btn-outline hover:btn-primary">
            <span class="truncate">Войти через GitHub</span>
            <i class="bx bxl-github bx-sm"></i>
          </button>
          <div class="divider">OR</div>
          <auth-form-sign-in v-if="isLogin" />
          <auth-form-sign-up v-else />
        </div>

        <div class="self-center my-8 text-sm">
          <div>
            <span class="">{{ isLogin ? 'У вас нет учетной записи? ' : 'У вас уже есть учетная запись? ' }}</span>
            <span class="cursor-pointer underline transition hover:text-primary" @click="isLogin = !isLogin">
              {{ isLogin ? 'Зарегистрируйтесь' : 'Войдите' }}
            </span>
          </div>
        </div>
      </div>
      <div class="sm:text-center">
        <p class="text-xs sm:mx-auto sm:max-w-sm opacity-50">
          Продолжая, вы соглашаетесь с
          <a class="hover:text-primary line-through">Условиями обслуживания</a> и
          <a class="hover:text-primary line-through">Политикой конфиденциальности </a>iQR.
        </p>
      </div>
    </div>
    <aside class="items-center justify-center flex-1 flex-shrink hidden basis-1/4 lg:flex relative">
      <auth-quote />
    </aside>
  </section>
</template>

<script setup lang="ts">
const isLogin = ref(true)
</script>
