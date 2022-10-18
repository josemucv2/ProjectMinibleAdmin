export default {
    methods: {
        notification(color, title, text) {
            this.$vs.notification({
                color,
                position: "bottom-center",
                title,
                text,
            });
        },
    },
};
