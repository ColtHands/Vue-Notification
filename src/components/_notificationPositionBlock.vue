<template>
    <div
        :class="['notifications', `notifications__${position}`]"
        v-for="(position, index) in eachActivePosition"
        :key="i"
    >
        <transition-group name="list" tag="div">
            <notificationMessage
                v-for="e in notifications"
                :key="e.id"
                @click.native="removeNotification(e.id)"
                :message="e.message"
                :style="e.style"
            />
        </transition-group>
    </div>
</template>