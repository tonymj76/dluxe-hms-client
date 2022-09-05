import ModalStyle from './Modal.module.css';
function Modal({children, display='flex', top, bgColor='rgba(1, 27, 64, 0.5)'}: any){
    return (
        <div 
        style={{
            display: display,
            position:'fixed',
            background: bgColor,
            padding:'20px',
            top:top,
            boxSizing:'border-box'
        }} className={ModalStyle.modal}>
        <div className={ModalStyle.block}></div>
        {children}    
        <div className={ModalStyle.block}></div>
        </div>
    );
}
export default Modal;