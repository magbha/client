import React, { useEffect, useState } from 'react'
import Dsidebar from '../../Components/Dashboard/Dsidebar/Dsidebar'
import Container from "react-bootstrap/Container";
import { BsFillEjectFill } from "react-icons/bs";
import Button from "react-bootstrap/esm/Button";
import MemberCard from '../../Components/Team/MemberCard';
import AddTeam from '../../Components/Team/AddTeam';
import { useDispatch, useSelector } from 'react-redux';
import { getTeam } from '../../JS/Actions/sign';

const TeamPage = () => {
  const BusinessId = useSelector((state) => state.persistedReducer?.currentUser?.workAt) 
  const isAdmin = useSelector((state) => state.persistedReducer?.currentUser?.isAdmin) 
  const teamList = useSelector((state) => state?.persistedReducer?.teamList) 

  const dispatch = useDispatch();
  const [showT, setShowT] = useState(false);
  const handleCloseT = () => setShowT(false);
  const handleShowT = () => setShowT(true);

    useEffect(() => {
     dispatch(getTeam(BusinessId))
    }, [dispatch])
    
  

  return (
    <div>
    <Dsidebar>
    <section className="dashboardSection">
          <Container className="dbmain" fluid>
            <div className="dbhead">
              <div className="dbhleft">
              <AddTeam handleCloseT={handleCloseT} showT={showT}/>
                <h1 xs="auto" className="dbtitle">
                  Team :
                </h1>
              </div>
              <div className="dbhright">
                <Button xs="auto" onClick={handleShowT} className="dbheadbtn" disabled={!isAdmin}>
                  <BsFillEjectFill /> Add New Team Member
                </Button>
              </div>
            </div>
            <Container className='d-flex  flex-wrap'>
            
            {teamList?.map((team , index) => <MemberCard key={index} team={team}/>)}
            
            </Container>
          </Container>
        </section>
    </Dsidebar>
    </div>
  )
}

export default TeamPage