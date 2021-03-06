import React, {useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

 const AddLogModal = () => {
     const [message, setMessage] = useState('')
     const [attention, setAttention] = useState(false)
     const [tech, setTech] = useState('')

     //Added to add icon to toast
     const toastIcon = `<i class='material-icons'>warning</i> Please enter a message and tech`

    const onSubmit = () => {
        if(message === '' || tech === '') {
            M.toast({html: toastIcon, classes: 'rounded red'})
        } else {
            console.log(message, tech, attention)
              //Clear Fields
              setMessage('')
              setTech('')
              setAttention(false)
        }
    }
    return (
        <div id='add-log-modal' className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={message} onChange={e => setMessage(e.target.value)}/>
                        <label htmlFor="message" className="active">
                            Log Message
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select name="tech" value={tech} className="browser-default" onChange={e => setTech(e.target.value)}>
                            <option value="" disabled>Select Technician</option>
                            <option value="Sam Smith">Sam Smith</option>
                            <option value="John Doe">John Doe</option>
                            <option value="Sara Wilson">Sara Wilson</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <label>
                            <input type="checkbox" className="filled-in" checked={attention} value={attention} onChange={e => setAttention(!attention)}/>
                            <span>Needs Attention</span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue btn">Enter</a>
            </div>
        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%'
}

export default AddLogModal;