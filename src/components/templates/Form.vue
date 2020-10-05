<template>
  <div class="formContainer">
    <p class="subtitle">Preencha com suas informações</p>
    <FormulateForm class="defaultFont">
      <div class="formRowInput">
        <FormulateInput
          v-model="name"
          name="Nome"
          type="text"
          label="Nome"
          validation="required"
        />
        <FormulateInput
          v-model="email"
          name="E-mail"
          type="email"
          label="Email"
          validation="required|email"
        />
      </div>
      <FormulateInput
        v-model="message"
        placeholder="Digite sua mensagem aqui..."
        type="textarea"
        label="Mensagem"
        validation="required|max:728"
      />
      <FormulateInput v-on:click="btnClick()" type="submit" label="Enviar" />
    </FormulateForm>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    btnClick() {
      if (this.name && this.email && this.message) {
        this.$snotify.success("Mensagem enviada com sucesso", "Enviado", {
          timeout: 2000,
          showProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
        })
      }
    },
  },
};
</script>

<style>
.formContainer {
  color: white;
  margin: 10px 200px;
  padding: 10px;
  background-color: #2e2f30;
  border-radius: 10px;
  overflow: hidden;
}

.formContainer .subtitle {
  padding-bottom: 5px;
  font-size: 1.2rem;
  font-weight: 300;
  border-bottom: 1px solid #ffffff60;
  font-family: "JetBrainsMono";
}

.formHeader {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.formRowInput {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.formRowInput > .formulate-input {
  width: 49%;
}

.formulate-form .formulate-input {
  margin-top: 10px;
}

.formulate-form .formulate-input label {
  font-weight: 600;
  margin-bottom: 4px;
}
.formulate-form .formulate-input-element input,
.formulate-form .formulate-input-element textarea {
  appearance: none;
  border-radius: 0.3em;
  border: 1px solid #cecece;
  box-sizing: border-box;
  font-size: 0.9em;
  padding: 0.75em;
  display: block;
  font-family: "JetBrainsMono";
  width: 100%;
  font-weight: 400;
  line-height: 1.2em;
  margin: 0px;
  text-decoration: none;
  outline: 0;
}

.formulate-form .formulate-input-element input:focus,
.formulate-form .formulate-input-element textarea:focus {
  border: 1px solid royalblue;
}

.formulate-input-errors {
  list-style: none;
  padding: 0;
}

.formulate-form .formulate-input-error {
  font-size: 0.8rem;
  font-weight: 600;
  color: red;
}

form.formulate-form div.formulate-input-element > button {
  border: none;
  font-family: "JetBrainsMono";
  border-radius: 5px;
  padding: 9px;
  color: white;
  font-weight: 600;
  background-color: royalblue;
  text-decoration: none;
  cursor: pointer;
  outline: 0;
}

form.formulate-form div.formulate-input-element > button:hover {
  background-color: #274ec2;
}

.formulate-input-element textarea {
  resize: none;
  height: 144px;
}

.snotifyToast {
  font-family: "JetBrainsMono";
}
</style>