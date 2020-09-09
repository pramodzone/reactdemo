import React, { useState ,useEffect } from 'react'
import Swal from 'sweetalert2'
import { Encounters } from '../Utils/Models'
import { Utils } from '../Utils/Utils'
import Checkbox from '@material-ui/core/Checkbox';
import EncounterService from '../Services/EncounterService'

function Encounter(props) {
     const [Encounter, setEncounter] = useState(new Encounters())    
    const [includeDisableStatus, setDisabledStatus] = useState(false);

    const onEncounterValueChanged = (e) => {
        let name = e.target.name
        let value = e.target.value
        let EncounterCopy = { ...Encounter }
        EncounterCopy[name] = value
        setEncounter(EncounterCopy)
    }

    function handleIncludeDisabledChange(event) {
        const loadAllRecords = event.target.checked; //get checkbox value
        setDisabledStatus(loadAllRecords);
      }

      
      const fetchData = async (includeDisabled) => {
        await EncounterService.getEncounter()
            .then(res =>
              {
                let record = res; //set response in variable              
                Encounter.data = record;
                setEncounter(Encounter);
              })
            .catch(err => {
                console.error(err)});
    }

useEffect(() => {
    fetchData(includeDisableStatus);
   }, []);

    const saveEncounter = () => {
        alert(Encounter.EncounterType);
    }
    const editModal = (e, item) => {
            e.preventDefault();
            let EncounterCopy = { ...Encounter }
            EncounterCopy.EncounterId = item.EncounterId;
            EncounterCopy.EncounterType = item.EncounterType;
            setEncounter(EncounterCopy); 
           }

           const deleteModel = (e, item) => {
               e.preventDefault();
               let EncounterCopy = { ...Encounter }
               EncounterCopy.EncounterId = item.EncounterId;
               EncounterCopy.EncounterType = item.EncounterType;
               new Utils().showConfirm().then((result) => {
                if (result.value) {
                // TODO- delete records from server after confirmation 
                  Swal.fire(
                    'Deleted!',
                    'Your record has been deleted.',
                    'success'
                  )
                }
              });
           }
    
    return (
        <React.Fragment>
            <div className="table-container">
                <h3 className="center-content text-primary">Encounter</h3>
                <form onSubmit={saveEncounter}>
                <div className="row">
                <div className="col-sm-2">
                <button className="btn btn-primary" id="btnEncounter" type="submit">Add New</button>
                        </div>
                       
                </div>
                </form>
                <br></br>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped data-table">
                        <thead>
                            <tr>
                                <th>Encounter Date</th>
                                <th>Encounter Type</th>
                                <th>Patient Name</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Encounter
