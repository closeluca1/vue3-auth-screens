<template>
  <div class="mb-4">
    <label for="exampleInputEmail1" class="form-label text-light"> {{ label }} </label>
    <div class="input-group mb-3">
        <span class="input-group-text bg-dark border-0 text-light" id="basic-addon1"> {{ icon }} </span>
        <input :type="type" class="form-control bg-dark border-0 rounded" :placeholder="placeholder"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    label: String,
    type: String,
    placeholder: String,
    icon: String
  }
};
</script>

<style>
input{
    color: #fafafa !important;
}
</style>