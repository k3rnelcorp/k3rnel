<template>
    <div class="introduction">
        <h1>{{ title }}</h1>
        <p>{{ subtitle.replace(/'/g, '"') }}</p>
        <p>{{ description }}</p>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        subtitle: String,
        description: String
    }
}
</script>

<style>
.introduction {
    color: white;
    margin: 30px 10px;
}

.introduction h1{
    font-weight: bolder;
}

.introduction > p{
    font-weight: 600;
    font-style: italic;
}
</style>