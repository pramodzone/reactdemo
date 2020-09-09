import Swal from 'sweetalert2'

export const getRandomId = () => {
    return Math.floor((Math.random()) * 0x10000).toString(16)
}

export const environment = {
    USER_API_BASE_URL :  "http://localhost:8080"
}

export class Utils {

    showErrorMessage(message, footerMessage) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message,
            footer: footerMessage
        })
    }
    showSuccessMessage(message) {
        Swal.fire(
            message,
            'Your file has been deleted.',
            'success'
        )
    }
    showCustomConfirm(message, confirmBtnText) {
        return Swal.fire({
            title: 'Are you sure?',
            text: message,
            icon: 'warning',
            showCancelButton: true,
            showOkButton:true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: confirmBtnText
        });
    }

    showConfirm() {
        return Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });
    }
    
}