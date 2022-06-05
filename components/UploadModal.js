import React from 'react'
import { useRecoilState } from 'recoil'
import {modalState} from "../atom/modalAtom"
export default function uploadModal() {
    
const [open , setOpen ] = useRecoilState(modalState)    

  return (
    <div>
      {open && <h1>the nodal is open</h1>}
    </div>
  )
}
