import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Social = (props) => {
    var type;
    if(props.name==='facebook'){
        type = <FontAwesomeIcon icon={faFacebook} size="2x" />;
    }
    else if(props.name==='instagram'){
        type = <FontAwesomeIcon icon={faInstagram} size="2x" />;
    }
    return (
            <>
            
            {type}
            </>
    );
}

export default Social