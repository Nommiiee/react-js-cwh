//create a classs
class Features extends Component {
    handleUpperCase = () => {
        let newText = this.props.text.toUpperCase();
        this.props.setText(newText);
        this.props.alert("Success", "changed to the uppercase!");
    },
    handleLowerCase = () => {
        let newText = this.props.text.toLowerCase();
        this.props.setText(newText);
        this.props.alert("Success", "changed to the lowercase!");
    }
}   