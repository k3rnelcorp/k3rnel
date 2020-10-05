<template>
  <nav class="nav">
    <ul>
      <li>
        <router-link to="/inicio">
          <button v-bind:class="{ buttonNav: true, defaultFont: true, select: isSelected[0]}" v-on:click="selected(0)">Início</button>
        </router-link>
      </li>
      <li>
        <router-link to="/sobre">
          <button v-bind:class="{ buttonNav: true, defaultFont: true, select: isSelected[1]}" v-on:click="selected(1)">Sobre</button>
        </router-link>
      </li>
      <li>
        <router-link to="/contato">
          <button v-bind:class="{ buttonNav: true, defaultFont: true, select: isSelected[2]}" v-on:click="selected(2)">Contate-nos</button>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
    data() {
        return {
            isSelected: [false,false,false],
            names: ['inicio', 'sobre', 'contato'],
            current: Number
        }
    },
    created() {
        const urlSplit = window.location.href.split('/')
        const params = urlSplit[urlSplit.length - 1]
        for (let index in this.names) {
            if (this.names[index] == params) {
                this.current = index
                break
            }
        }
    },
    mounted() {
        this.selected(this.current)
    },
    methods: {
        selected(index) {
            this.isSelected = [false,false,false]
            this.isSelected[index] = true
        }
    }
};
</script>

<style>
.nav router-link {
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #ffffff;
}

.nav {
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
}

.nav button {
  background: transparent;
  border: none;
  color: #ffffff;
  font-weight: 500;
  cursor: pointer;
  font-size: 1.1rem;
  outline: none;
}

.nav button:hover {
  border-bottom: 1px solid #ffffff;
}

.nav .select {
    border-bottom: 1px solid #ffffff;
}

.nav ul {
  display: flex;
  list-style: none;
  padding-left: 0px;
}

ul > li {
  margin-right: 50px;
}

@media (max-width: 460px) {
  .nav button {
    font-size: 1.1rem;
  }
  ul > li {
    margin-right: 20px;
  }
}

@media (max-width: 366px) {
  .nav button {
    font-size: 1rem;
  }
  ul > li {
    margin-right: 10px;
  }

}

@media (max-width: 354px) {
  .nav button {
    font-size: 0.9rem;
  }
  ul > li {
    margin-right: 0px;
  }
  
}
</style>