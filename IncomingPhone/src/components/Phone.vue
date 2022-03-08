<script></script>
<template>
<div class="content-center">
    <div class="pulse"> <i class="fas fa-phone fa-2x"></i> </div>
</div>
</template>
<style scoped>
.content-center {
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.pulse i {
    color: #fff
}
.pulse {
    height: 100px;
    width: 100px;
    background-color: #00f59e;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative
}

.pulse::before {
    content: "";
    position: absolute;
    border: 1px solid #00f59e;
    width: calc(100% + 40px);
    height: calc(100% + 40px);
    border-radius: 50%;
    animation: pulse 1s linear infinite
}
.pulse::after {
    content: "";
    position: absolute;
    border: 1px solid #00f59e;
    width: calc(100% + 40px);
    height: calc(100% + 40px);
    border-radius: 50%;
    animation: pulse 1s linear infinite;
    animation-delay: 0.3s
}

@keyframes pulse {
    0% {
        transform: scale(0.5);
        opacity: 0
    }

    50% {
        transform: scale(1);
        opacity: 1
    }

    100% {
        transform: scale(1.3);
        opacity: 0
    }
}
</style>