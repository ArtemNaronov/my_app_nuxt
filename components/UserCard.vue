<template>
  <div class="User__item">
    <div class="name">
        {{ user.name }}
    </div>
    <div class="avatar"></div>
    <div class="information">
      <div class="User__email"> <span>Email: </span> <span>{{ user.email }} </span></div>
      <div class="User__email"> <span>Phone: </span> <span>{{ user.phone }} </span></div>
      <div class="User__address">
        <span>Address: </span>
        <div>
          <div>
            <span>City: </span>
            <span> {{ user.address.city }} </span>
          </div>
          <div>
            <span>Street: </span>
            <span> {{ user.address.street }} </span>
          </div>
          <div>
            <span>Suite: </span>
            <span> {{ user.address.suite }} </span>
          </div>
          <div>
            <span>Zipcode: </span>
            <span> {{ user.address.zipcode }} </span>
          </div>
        </div>
      </div>
      <div class="User__company">
        <span>Company: </span>
        <div>
          <div>
            <span>Name: </span>
            <span> {{ user.company.name }} </span>
          </div>
          <div>
            <span>Catch Phrase: </span>
            <span> {{ user.company.catchPhrase }} </span>
          </div>
          <div>
            <span>bs: </span>
            <span> {{ user.company.bs }} </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["user"],
    data() {
      return {}
    }
  }
</script>
