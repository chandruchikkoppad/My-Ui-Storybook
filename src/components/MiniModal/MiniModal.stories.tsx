import type { Meta, StoryObj } from '@storybook/react';
import { useRef, useState } from 'react';
import MiniModal from './MiniModal';
import Button from '../Button/Button';
import './MiniModal.scss';
import Typography from '../Typography';

const meta: Meta<typeof MiniModal> = {
  title: 'Components/MiniModal',
  component: MiniModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof MiniModal>;

const useModal = () => {
  const [currentModal, setCurrentModal] = useState<number | null>(null);
  const openModal = (modalId: number) => {
    setCurrentModal((prevModal) => (prevModal === modalId ? null : modalId));
  };
  const closeModal = () => setCurrentModal(null);
  return { currentModal, openModal, closeModal };
};
const BasicModalComponent = () => {
  const btnRef1 = useRef<HTMLButtonElement>(null);
  const btnRef2 = useRef<HTMLButtonElement>(null);
  const { currentModal, openModal, closeModal } = useModal();

  const handleCancel = () => {
    closeModal();
  };

  return (
    <div className="ff-mini-modal-buttons-flex ff-mini-modal-gap-10">
      <Button
        onClick={() => openModal(1)}
        ref={btnRef1}
        label="1"
        variant={currentModal === 1 ? 'primary' : 'secondary'}
      />

      {currentModal === 1 && (
        <MiniModal
          anchorRef={btnRef1}
          headerProps={
            <>
              <Typography as="p">Modal 1</Typography>
              <hr />
            </>
          }
          childContent={
            <>
              <Typography as="p">
                This is some asdsadasd sa dasdadad content inside the first
                modal.
              </Typography>
            </>
          }
          cancelButtonProps={{
            text: 'Cancel',
            onClick: handleCancel,
          }}
          proceedButtonProps={{
            text: 'Proceed',
            onClick: () => {},
          }}
          isWrapped={false}
          isAnimated={true}
        />
      )}

      <Button
        onClick={() => openModal(2)}
        ref={btnRef2}
        label="2"
        variant={currentModal === 2 ? 'primary' : 'secondary'}
      />

      {currentModal === 2 && (
        <MiniModal
          anchorRef={btnRef2}
          headerProps={
            <>
              <Typography as="p" fontSize={12} fontWeight="regular">
                Modal 2
              </Typography>
              <hr />
            </>
          }
          childContent={
            <>
              <Typography as="p" fontSize={12} fontWeight="regular">
                This is some content inside the second modal.
              </Typography>
            </>
          }
          cancelButtonProps={{
            text: 'Cancel',
            onClick: handleCancel,
          }}
          proceedButtonProps={{
            text: 'Proceed',
            onClick: () => {},
          }}
          isWrapped={false}
          isAnimated={false}
        />
      )}
    </div>
  );
};
export const BasicModal: Story = {
  render: () => <BasicModalComponent />,
};
export const CustomModalWithWrapper = () => {
  const btnRef1 = useRef<HTMLButtonElement>(null);
  const btnRef2 = useRef<HTMLButtonElement>(null);
  const btnRef3 = useRef<HTMLButtonElement>(null);
  const { currentModal, openModal, closeModal } = useModal();

  const handleCancel = () => {
    closeModal();
  };

  return (
    <div className="ff-mini-modal-buttons-flex ff-mini-modal-gap-10">
      <Button
        onClick={() => openModal(1)}
        ref={btnRef1}
        label="1"
        variant={currentModal === 1 ? 'primary' : 'secondary'}
      />

      {currentModal === 1 && (
        <MiniModal
          anchorRef={btnRef1}
          modalProperties={{ width: 487, height: 180 }}
          headerProps={
            <>
              <Typography as="p">Update Label For Scripts</Typography>
              <hr />
            </>
          }
          childContent={
            <>
              <Typography as="p">
                This is some content inside the first modal.
              </Typography>
            </>
          }
          cancelButtonProps={{
            text: 'Cancel',
            onClick: handleCancel,
          }}
          proceedButtonProps={{
            text: 'Update',
            onClick: () => {},
          }}
          isWrapped={true}
          isAnimated={true}
          firstAnchorRef={btnRef1}
          anchorRefLeftNum={164}
          anchorLeftDistanceForWrapper={170}
          extraTopSpace={{ normalModal: 5 }}
        />
      )}

      <Button
        onClick={() => openModal(2)}
        ref={btnRef2}
        label="2"
        variant={currentModal === 2 ? 'primary' : 'secondary'}
      />

      {currentModal === 2 && (
        <MiniModal
          anchorRef={btnRef2}
          modalProperties={{ width: 358, height: 135 }}
          headerProps={
            <>
              <Typography as="p">Export Selected scripts</Typography>
              <hr />
            </>
          }
          childContent={
            <Typography as="p">Child content modify here</Typography>
          }
          cancelButtonProps={{
            text: 'Cancel',
            onClick: handleCancel,
          }}
          proceedButtonProps={{
            text: 'Export',
            onClick: () => {},
          }}
          isWrapped={true}
          isAnimated={false}
          firstAnchorRef={btnRef1}
          anchorRefLeftNum={193}
          anchorLeftDistanceForWrapper={170}
          extraTopSpace={{ normalModal: 5 }}
        />
      )}

      <Button
        onClick={() => openModal(3)}
        ref={btnRef3}
        label="3"
        variant={currentModal === 3 ? 'primary' : 'secondary'}
      />

      {currentModal === 3 && (
        <MiniModal
          anchorRef={btnRef3}
          modalProperties={{ width: 487, height: 210 }}
          headerProps={
            <>
              <Typography as="p">Delete Selected Scripts</Typography>
              <hr />
            </>
          }
          childContent={
            <>
              <Typography as="p">
                This is some content inside the third modal.
              </Typography>
            </>
          }
          cancelButtonProps={{
            text: 'Cancel',
            onClick: handleCancel,
          }}
          proceedButtonProps={{
            text: 'Delete',
            onClick: () => {},
          }}
          isWrapped={true}
          isAnimated={true}
          firstAnchorRef={btnRef1}
          anchorRefLeftNum={225}
          anchorLeftDistanceForWrapper={170}
          extraTopSpace={{ normalModal: 5 }}
        />
      )}
    </div>
  );
};
export const CustomModalWithArrow = () => {
  const btnRef1 = useRef<HTMLButtonElement>(null);
  const btnRef2 = useRef<HTMLButtonElement>(null);
  const btnRef3 = useRef<HTMLButtonElement>(null);
  const btnRef4 = useRef<HTMLButtonElement>(null);
  const btnRef5 = useRef<HTMLButtonElement>(null);
  const { currentModal, openModal, closeModal } = useModal();

  const handleCancel = () => {
    closeModal();
  };

  return (
    <div className="ff-mini-modal-buttons-flex ff-mini-modal-gap-10">
      <Button
        onClick={() => openModal(1)}
        ref={btnRef1}
        label="1"
        variant={currentModal === 1 ? 'primary' : 'secondary'}
      />

      {currentModal === 1 && (
        <MiniModal
          anchorRef={btnRef1}
          modalProperties={{ width: 400, height: 350 }}
          headerProps={
            <>
              <Typography as="p">Modal 1</Typography>
              <hr />
            </>
          }
          childContent={
            <>
              <Typography as="p">
                This is some content inside the third modal.
              </Typography>
              <Typography as="p">
                This is some content inside the third modal.
              </Typography>
              <Typography as="p">
                This is some content inside the third modal.
              </Typography>
            </>
          }
          cancelButtonProps={{
            text: 'Cancel',
            onClick: handleCancel,
          }}
          proceedButtonProps={{
            text: 'Proceed',
            onClick: () => {},
          }}
          isWrapped={false}
          isAnimated={true}
          isPopOver={true}
          extraTopSpace={{ normalModal: 10 }}
        />
      )}
      <Button
        onClick={() => openModal(2)}
        ref={btnRef2}
        label="2"
        variant={currentModal === 2 ? 'primary' : 'secondary'}
      />

      {currentModal === 2 && (
        <MiniModal
          modalProperties={{ width: 400, height: 350 }}
          anchorRef={btnRef2}
          headerProps={
            <>
              <Typography as="p">Modal 2</Typography>
              <hr />
            </>
          }
          childContent={
            <>
              <Typography as="p">
                This is some content inside the third modal. Lorem ipsum dolor
                elit.
              </Typography>
            </>
          }
          cancelButtonProps={{
            text: 'Cancel',
            onClick: handleCancel,
          }}
          proceedButtonProps={{
            text: 'Proceed',
            onClick: () => {},
          }}
          isWrapped={false}
          isAnimated={false}
          isPopOver={true}
          modalPosition="right"
          extraRightSpace={{ middleLeftArrow: 4 }}
          extraLeftSpace={{ rightAlignModal: 40 }}
        />
      )}
      <Button
        onClick={() => openModal(3)}
        ref={btnRef3}
        label="3"
        variant={currentModal === 3 ? 'primary' : 'secondary'}
      />

      {currentModal === 3 && (
        <MiniModal
          anchorRef={btnRef3}
          headerProps={
            <>
              <Typography as="p">Modal 3</Typography>
              <hr />
            </>
          }
          childContent={
            <>
              <Typography as="p">
                This is some content inside the third modal. Lorem ipsum dolor
                sit.
              </Typography>
            </>
          }
          cancelButtonProps={{
            text: 'Cancel',
            onClick: handleCancel,
          }}
          proceedButtonProps={{
            text: 'Proceed',
            onClick: () => {},
          }}
          modalPosition="right"
          isPopOver={true}
          leftTopArrow={true}
          extraRightSpace={{ middleLeftArrow: 30 }}
          extraLeftSpace={{ rightAlignModal: 40 }}
        />
      )}
      <Button
        onClick={() => openModal(4)}
        ref={btnRef4}
        label="4"
        variant={currentModal === 4 ? 'primary' : 'secondary'}
      />

      {currentModal === 4 && (
        <MiniModal
          anchorRef={btnRef4}
          modalProperties={{ height: 148 }}
          headerProps={
            <>
              <Typography as="p">Modal 4</Typography>
              <hr />
            </>
          }
          childContent={
            <>
              <Typography as="p">
                This is some content inside the third modal. Lorem ipsum dolor
                sit.
              </Typography>
            </>
          }
          cancelButtonProps={{
            text: 'Cancel',
            onClick: handleCancel,
          }}
          proceedButtonProps={{
            text: 'Proceed',
            onClick: () => {},
          }}
          modalPosition="top"
          isPopOver={true}
          leftTopArrow={true}
          extraTopSpace={{ normalModal: 20 }}
          extraRightSpace={{ middleLeftArrow: 30 }}
          extraLeftSpace={{ rightAlignModal: 40 }}
        />
      )}
      <Button
        onClick={() => openModal(5)}
        ref={btnRef5}
        label="5"
        variant={currentModal === 5 ? 'primary' : 'secondary'}
      />

      {currentModal === 5 && (
        <MiniModal
          anchorRef={btnRef5}
          modalProperties={{ height: 148, width: 404 }}
          headerProps={
            <>
              <Typography as="p">Modal 5</Typography>
              <hr />
            </>
          }
          childContent={
            <>
              <Typography as="p">
                This is some content inside the third modal. Lorem ipsum dolor
                sit.
              </Typography>
            </>
          }
          cancelButtonProps={{
            text: 'Cancel',
            onClick: handleCancel,
          }}
          proceedButtonProps={{
            text: 'Proceed',
            onClick: () => {},
          }}
          modalPosition="left"
          isPopOver={true}
          leftTopArrow={true}
          extraTopSpace={{ normalModal: 20 }}
          extraRightSpace={{ middleLeftArrow: 30 }}
          extraLeftSpace={{ rightAlignModal: 40 }}
        />
      )}
    </div>
  );
};

export default meta;
