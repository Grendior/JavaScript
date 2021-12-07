

<template>
  <div>
    <!-- <the-header></the-header> -->
    <TheHeader />
    <button @click="setSelectedComponent('active-goals')" >Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')" >Manage Goals</button>
<!--     
    <ActiveGoals v-if="selectedComponent === 'active-goals'" />
    <ManageGoals v-if="selectedComponent === 'manage-goals'" /> -->
    <keep-alive>
    <component :is="selectedComponent"> </component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
// import UserInfo from './components/UserInfo.vue';
// import BadgeList from './components/BadgeList.vue';
// import CourseGoals from './components/CourseGoals.vue';
import ActiveGoals from './components/UI/ActiveGoals.vue';
import ManageGoals from  './components/UI/ManageGoals.vue';
export default {
  components: { TheHeader, ActiveGoals, ManageGoals},
  //  UserInfo, BadgeList, CourseGoals 
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
    
  },
  methods: {
    setSelectedComponent(value){
      this.selectedComponent = value;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>