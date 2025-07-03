'use client';
import React from 'react'
import { toast } from 'sonner'
import { Button } from '../ui/button';

const Text = () => {
  const handleClick = (mode) => {
    toast ? toast.success('Success') : toast.error('Toast Error')
  }
  return (
    <div>
        <Button className="bg-red-400 text-white" onClick={()=> handleClick(false)} variant="default">
            Click
        </Button>
    </div>
  )
}

export default Text