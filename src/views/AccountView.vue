<template>
  <div class="account">
    <AddAccounts
      @addlist="addUsetoList"
      @closeadduser="closeAddUserModal"
      :is-modal-active="isModalAddUserOpen"
    />
    <UpdateAccounts
      :account-id="selectedId"
      :is-modal-active="isModelUpdateUserOpen"
      @closeupdateuser="closeUpdateUserModal"
      @updateaccount="updateList"
    />
    <div class="container">
      <div class="columns">
        <div class="column is-half has-text-left">
          <h1 class="title">User List</h1>
        </div>
        <div class="column is-half">
          <div class="columns">
            <div class="column is-2 has-text-left"></div>
            <div class="column is-8 has-text-left">
              <div class="field has-addons">
                <div class="control">
                  <input
                    v-model="searchvalue"
                    class="input"
                    type="text"
                    placeholder="Find a Accounts"
                  />
                </div>
                <div class="control">
                  <a class="button is-info" @click="searchAccount"> Search</a>
                </div>
              </div>
            </div>
            <div class="column is-2 has-text-left">
              <button class="button" @click="addUser">Add</button>
            </div>
          </div>
        </div>
      </div>
      <TableList
        :userlist="userList"
        @setId="setAccountId"
        @closeAccount="closeAccounts"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";

// @ is an alias to /src
import TableList from "@/components/UserTableList.vue";
import AddAccounts from "@/components/AddAccountsForm.vue";
import UpdateAccounts from "@/components/UpdateAccountsForm.vue";

export default {
  name: "AccountView",
  components: {
    TableList,
    AddAccounts,
    UpdateAccounts,
  },
  data() {
    return {
      userList: [],
      searchvalue: "",
      selectedId: "",
      isModalAddUserOpen: false,
      isModelUpdateUserOpen: false,
      url: "https://front-end-test-assignment.fintech-market.com/api/v1/accounts/",
      searchUrl:
        "https://front-end-test-assignment.fintech-market.com/api/v1/accounts/search",
      auth: "Basic ZGFuYWJpamFrOmlWcFprMUMwQUZGd0RmRFY=",
    };
  },
  methods: {
    closeAddUserModal() {
      console.log("emit");
      this.isModalAddUserOpen = false;
    },
    closeUpdateUserModal() {
      console.log("emit");
      this.isModelUpdateUserOpen = false;
    },
    addUser() {
      this.isModalAddUserOpen = true;
    },
    addUsetoList(list) {
      this.userList.push(list);
      this.isModalAddUserOpen = false;
    },
    updateList(list) {
      let objIndex = this.userList.findIndex((obj) => obj.id == list.id);
      this.userList[objIndex] = list;
      this.isModelUpdateUserOpen = false;
    },
    setAccountId(id) {
      this.selectedId = id;
      this.isModelUpdateUserOpen = true;
    },
    searchAccount() {
      var self = this;
      let config = {
        headers: {
          Authorization: this.auth,
          accept: "application/json",
        },
      };
      axios
        .post(this.searchUrl, { data: { name: this.searchvalue } }, config)
        .then(function (response) {
          let data = response.data.data;
          self.userList = data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    closeAccounts(id) {
      var self = this;
      let config = {
        headers: {
          Authorization: this.auth,
          accept: "application/json",
        },
      };
      axios
        .patch(this.url + id + "/close", {}, config)
        .then(function (response) {
          let data = response.data.data;
          self.updateList(data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
