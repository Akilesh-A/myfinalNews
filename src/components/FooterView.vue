<template>
    <div class="container-fluid">
     <div class="footer">
        <p>{{ footerName}}</p>
     </div>

    </div>
</template>
<script>
export default {
    data() {
        return{
            footerName:'BBC News Live'

        }
    }
}
</script>

<style>
.footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #2a2c2d;
    color: #fff;
    padding: 10px 0; 
    text-align: center;
}

.footer p{
    padding-top: 20px;
    font-size: 30px;
}
@media screen and (max-width:780px){

    .footer p{
        font-size: 16px;
    }

}
</style>