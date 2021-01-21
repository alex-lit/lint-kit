<script lang="ts">
  /* eslint-disable no-undef */
  const Auth = (a) => a;

  /**
   * @param a
   */
  function Component<T>(a: T) {
    return a;
  }

  /**
   * Шапка приложения
   */
  @Component({
    created() {},
    components: {
      SelectUser: () => import('src/components/select-user'),
      MenuUser: () => import('src/components/menu-user'),
    },
  })
  export default class vue {
    @Auth('selectedUserId')
    #selectedUserId;

    @Auth('user')
    user;

    @Auth('clearUserInfo')
    clearUserInfo;

    @Auth('setSelectedUserId')
    setSelectedUserId;

    /**
     * Выход из приложения
     */
    logout() {
      this.$router.push('/login');
      this.clearUserInfo();
    }

    /**
     * Идентификатор выбранного пользователя (геттер)
     */
    get selectedUserId() {
      return this._selectedUserId;
    }

    /**
     * Идентификатор выбранного пользователя (сеттер)
     */
    set selectedUserId(id: number) {
      this.setSelectedUserId(id);
    }

    /**
     * При смене пользователя прокидывает его идентификатор в url
     *
     * @param selectedUserId Идентификатор пользователя
     */
    onSelectedUserChange(selectedUserId: number) {
      if (
        [
          '/gates/dashboard',
          '/gates/gates',
          '/gates/gates-2fa',
          '/gates/addresses',
          '/gates/transactions',
          '/gates/transfer',
          '/gates/transfer-2fa',
          '/gates/logs',
        ].includes(this.$route.path)
      ) {
        (this.$router as any).push({
          hash: this.$route.hash,
          params: this.$route.params,
          query: {
            ...this.$route.query,
            filter: {
              ...(this.$route.query.filter as Record<string, any>),
              user_id: selectedUserId || undefined,
            },
          },
        });
      }
    }
  }
</script>

<template>
  <q-header class="app-header">
    <q-toolbar class="app-header__toolbar">
      <q-btn
        aria-label="Menu"
        class="[ q-mr-sm ]"
        dense
        flat
        icon="menu"
        round
        @click="setAsideVisibility(!isShowAside)"
      ></q-btn>
      <q-btn flat no-caps stretch style="pointer-events: none">
        <q-toolbar-title> {{ title }} </q-toolbar-title>
      </q-btn>

      <q-space></q-space>

      <select-user
        v-if="user.is_admin"
        v-model="selectedUserId"
        class="[ q-mr-md ]"
        :select-options="{
          clearable: true,
          dense: true,
          emitValue: true,
          outlined: true,
          mapOptions: true,
          label: 'User',
          optionLabel: 'name',
          optionValue: 'id',
        }"
        :variables="{
          perPage: 1000,
          fields: {
            users: 'id,name',
          },
        }"
        @input="(value) => onSelectedUserChange(value)"
      ></select-user>

      <menu-user></menu-user>
    </q-toolbar>
  </q-header>
</template>

<style lang="scss" scoped>
  .app-header {
    background-color: white;
    color: $grey-10;

    @at-root .body--dark & {
      background-color: var(--q-color-dark);
      color: white;
    }
  }

  .app-header__toolbar {
    height: 0.4rem;
  }
</style>
