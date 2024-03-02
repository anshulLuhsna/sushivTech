"use client"

import React from 'react'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Modal } from 'flowbite-react';
import { Button } from 'flowbite-react';

function Page() {
  const [openModal, setOpenModal] = useState(true);
  const router = useRouter();
  const [error, setError] = useState("");
  // const session = useSession();
  const { data: session, status: sessionStatus } = useSession();

  // useEffect(() => {
  //   if (sessionStatus !== "authenticated") {
  //     router.replace("/login");
  //   }
  // }, [sessionStatus, router]);

  return (
    // sessionStatus === "authenticated" && (
    <div>

<Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Notification</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
              companies around the world are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
              to ensure a common set of data rights in the European Union. It requires organizations to notify users as
              soon as possible of high-risk data breaches that could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
  // )
}

export default Page