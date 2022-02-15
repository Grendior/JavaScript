<template>
  <div>
    <label @click="showMessageForm"
      >{{ writeMessage ? "Ukryj" : "Napisz wiadomość" }}
    </label>
    <new-message v-if="writeMessage" @add-message="addMessage"></new-message>
    <!-- <input type="text" v-model="searchKey" /> -->
    <table>
      <tr>
        <th>
          <input
            type="checkbox"
            id="selectAll"
            @click="selectAll"
            v-model="checkboxCheckedProp"
          />
        </th>
        <th>temat</th>
        <th>od</th>
        <th>data</th>
        <th>rozmiar</th>
      </tr>
      <message
        v-for="msg in paginate"
        :key="msg.id"
        :message="msg"
        @check="msg.checked = $event"
        @click="selectedMsg = msg"
      ></message>
    </table>
  </div>
  <div>
    <ul>
      <template v-for="pageNumber in totalPages" :key="pageNumber">
        <li
          v-if="
            Math.abs(pageNumber - currentPage) < 3 ||
            pageNumber == totalPages ||
            pageNumber == 1
          "
        >
          <a
            v-bind:key="pageNumber"
            href="#"
            @click="setPage(pageNumber)"
            :class="{
              current: currentPage === pageNumber,
              last:
                pageNumber == totalPages &&
                Math.abs(pageNumber - currentPage) > 3,
              first: pageNumber == 1 && Math.abs(pageNumber - currentPage) > 3,
            }"
            >{{ pageNumber }}</a
          >
        </li>
      </template>
    </ul>
  </div>
  <div>Zaznaczono {{ selectCount }} wiadomości z {{ messages.length }}</div>
  <div>{{ selectedId }}</div>
  <message-description
    v-if="selectedMsg"
    :key="selectedMsg.id"
    :msg="selectedMsg"
  ></message-description>
</template>

<script>
import MESSAGE_DATA from "../data.js";

import Message from "../components/Message.vue";
import MessageDescription from "../components/MessageDescription.vue";
import NewMessage from "./NewMessage.vue";

import { ref, computed, watch } from "vue";
export default {
  components: {
    MessageDescription,
    Message,
    NewMessage,
  },
  setup() {
    const currentPage = ref(1);
    const itemsPerPage = ref(2);
    const selectedId = ref("");
    const selectedMsg = ref(null);
    // const allChecked = ref(false);
    const writeMessage = ref(false);
    const messages = ref(MESSAGE_DATA);
    const checkboxCheckedProp = ref(false);

    // Computed
    const totalPages = computed(function () {
      return Math.ceil(resultCount.value / itemsPerPage.value);
    });
    const paginate = computed(function () {
      if (!messages.value) {
        return [];
      }
      var index = currentPage.value * itemsPerPage.value - itemsPerPage.value;
      return messages.value.slice(index, index + itemsPerPage.value);
    });

    const resultCount = computed(function () {
      return messages.value.length;
    });

    const selectCount = computed(function () {
      let count = 0;
      for (let i = 0; i < messages.value.length; i++) {
        if (messages.value[i].checked) {
          count++;
        }
      }
      return count;
    });
    // Watchers
    watch([selectedId], function (_, newValue) {
      selectedMsg.value = messages.value.filter(
        (item) => item.id == newValue
      )[0];
    });

    watch([currentPage, totalPages], function () {
      if (currentPage.value >= totalPages.value) {
        currentPage.value = totalPages.value;
      }
    });
    // Functions used outside setup
    function setPage(pageNumber) {
      currentPage.value = pageNumber;
    }
    function showMessageForm() {
      writeMessage.value = !writeMessage.value;
    }
    function selectAll() {
      // messages.value.forEach((item) => (item.checked = false));
      messages.value.forEach(function (item) {
        if (checkboxCheckedProp.value == false) {
          item.checked = false;
        } else if (checkboxCheckedProp.value == true) {
          item.checked = true;
        }
      });
    }
    function addMessage(msgRecived) {
      let date = new Date();
      const addNewMessage = {
        id: randomID(),
        subject: msgRecived.enteredSubject,
        from: msgRecived.enteredFrom,
        data: date.toLocaleString("pl", {
          day: "numeric",
          month: "numeric",
          year: "numeric",
        }),
        size: getRandomInt(1, 50) + "KB",
        context: msgRecived.enteredContext,
        checked: false,
      };
      console.log(msgRecived);
      messages.value.push(addNewMessage);
    }
    //fuctions used inside setup
    function randomID() {
      return "_" + Math.random().toString(36).substr(2, 9);
    }
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }

    return {
      currentPage,
      itemsPerPage,
      selectedId,
      selectedMsg,
      // allChecked,
      writeMessage,
      totalPages,
      paginate,
      resultCount,
      selectCount,
      messages,
      setPage,
      showMessageForm,
      selectAll,
      addMessage,
    };
  },
};
</script>

<style>
.evenlly {
  display: flex;
  justify-content: space-evenly;
}
a {
  color: #999;
}
.current {
  color: red;
}
ul {
  padding: 0;
  list-style-type: none;
}
li {
  display: inline;
  margin: 5px 5px;
}

a.first::after {
  content: "...";
}

a.last::before {
  content: "...";
}
</style>