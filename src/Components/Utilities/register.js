import firebase from '../firebase.js';

export function register(email, name, age, phone_number, isSpace, isRobots, isMagic, isArt, isMusic, isVideoGame, isStory, isDancing, _this) {

    firebase.database().ref('/signup/' + name).once('value').then(function (snapshot) {
        if (snapshot.val() === null || snapshot.val() === undefined) {
            firebase.database().ref('signup/' + name).set({
                name: name,
                age: age,
                email: email,
                phone_number: phone_number,
                isSpace: isSpace,
                isRobots: isRobots,
                isMagic: isMagic,
                isArt: isArt,
                isMusic: isMusic,
                isVideoGame: isVideoGame,
                isStory: isStory,
                isDancing: isDancing,

            });
            // _this.setState({
            //     showAlert: true,
            //     alertMessage: "User has been successfully register. Please login",
            //     alertType: 'success'
            // })
        }

    });
}