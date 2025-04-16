import type { Meta, StoryObj } from '@storybook/react';
import { useRef, useState } from 'react';
import MiniModal from './MiniModal';
import Button from '../Button/Button';
import './MiniModal.scss';
import Typography from '../Typography';
import Icon from '../Icon';
import React from 'react';
import CustomDatePicker from '../DatePicker/DatePicker';

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
  const btnRef3 = useRef<HTMLButtonElement>(null);
  const btnRef4 = useRef<HTMLButtonElement>(null);
  const btnRef5 = useRef<HTMLButtonElement>(null);
  const datePickerRef = useRef<HTMLDivElement>(null);
  const { currentModal, openModal, closeModal } = useModal();
  const [selectedDate, setSelectDate] = useState<Date | undefined>();

  const handleCancel = () => {
    closeModal();
  };

  return (
    <div className="ff-mini-modal-buttons-flex ff-mini-modal-gap-10">
      <Button
        onClick={() => openModal(1)}
        id="112233"
        ref={btnRef1}
        label="1"
        variant={currentModal === 1 ? 'primary' : 'secondary'}
      />

      {currentModal === 1 && (
        <MiniModal
          anchorRef="112233"
          overlay={{
            isOverlay: true,
            zIndexOverlay: 199,
          }}
          modalProperties={{
            width: 300,
            height: 180,
          }}
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
              <CustomDatePicker
                value={selectedDate}
                onChange={setSelectDate}
                calendarWidth={240}
                dateOnly
                zIndex={100}
                ref={datePickerRef}
              />
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
          isPopOver={false}
          isAnimated={true}
          modalPosition="left"
          ignoreRefs={[datePickerRef]}
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
          modalProperties={{ width: 300, height: 180 }}
          headerProps={
            <>
              <Typography as="p">Modal 2</Typography>
              <hr />
            </>
          }
          childContent={
            <>
              <Typography as="p">
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
          isPopOver={false}
          modalPosition="top"
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
          modalProperties={{ width: 300, height: 180 }}
          headerProps={
            <>
              <Typography as="p">Modal 3</Typography>
              <hr />
            </>
          }
          childContent={
            <>
              <Typography as="p">
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
          isPopOver={false}
          modalPosition="top"
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
          modalProperties={{ width: 300, height: 180 }}
          headerProps={
            <>
              <Typography as="p">Modal 4</Typography>
              <hr />
            </>
          }
          childContent={
            <>
              <Typography as="p">
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
          isPopOver={false}
          modalPosition="bottom"
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
          modalProperties={{ width: 300, height: 180 }}
          headerProps={
            <>
              <Typography as="p">Modal 5</Typography>
              <hr />
            </>
          }
          childContent={
            <>
              <Typography as="p">
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
          isPopOver={false}
          modalPosition="right"
        />
      )}
    </div>
  );
};
export const BasicModal: Story = {
  render: () => <BasicModalComponent />,
};

export const CustomModalWithArrow = () => {
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
        label="1"
        id="1a2b"
        variant={currentModal === 1 ? 'primary' : 'secondary'}
      />

      {currentModal === 1 && (
        <MiniModal
          anchorRef="1a2b"
          overlay={{
            isOverlay: true,
            zIndexOverlay: 99,
          }}
          modalProperties={{ width: 300, height: 250}}
          arrowProperties={{top: -10 }}
          arrowZIndex={1000}
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
          outSideClick={handleCancel}
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
          modalProperties={{ width: 300, height: 350 }}
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
          outSideClick={handleCancel}
          proceedButtonProps={{
            text: 'Proceed',
            onClick: () => {},
          }}
          isWrapped={false}
          isAnimated={false}
          isPopOver={true}
          modalPosition="right"
          leftTopArrow={false}
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
          modalProperties={{ width: 300, height: 250 }}
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
          outSideClick={handleCancel}
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
          modalProperties={{ width: 300, height: 200 }}
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
          outSideClick={handleCancel}
          proceedButtonProps={{
            text: 'Proceed',
            onClick: () => {},
          }}
          modalPosition="top"
          isPopOver={true}
          leftTopArrow={true}
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
          modalProperties={{ height: 148, width: 304 }}
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
          footerContent={
            <>
              <p>Footer</p>
              <button onClick={handleCancel}>Cancel</button>
            </>
          }
          outSideClick={handleCancel}
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
        />
      )}
    </div>
  );
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
          overlay={{
            isOverlay: true,
            zIndexOverlay: 99,
            backgroundColorOverlay: 'var(--pop-up-background-blur)',
          }}
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
          outSideClick={handleCancel}
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
          outSideClick={handleCancel}
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
          modalProperties={{
            width: 487,
            height: 210,
            borderRadius: 0,
            zIndex: 3,
            boxShadow: 'none',
          }}
          wrapperProperties={{ width: 30, zIndex: 4, boxShadow: 'none' }}
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
          outSideClick={handleCancel}
          firstAnchorRef={btnRef1}
          anchorRefLeftNum={225}
          anchorLeftDistanceForWrapper={170}
          extraTopSpace={{ normalModal: 50 }}
        />
      )}
    </div>
  );
};
export const normalModalFollowedByIcon = () => {
  const iconRef1 = useRef<HTMLButtonElement>(null);
  const iconRef2 = useRef<HTMLButtonElement>(null);
  const iconRef3 = useRef<HTMLButtonElement>(null);
  const { currentModal, openModal } = useModal();

  return (
    <div className="ff-mini-modal-buttons-flex ff-mini-modal-gap-10">
      <Icon
        className="ff-mini-edit-model-icon"
        width={16}
        height={16}
        onClick={() => openModal(1)}
        ref={iconRef1}
        name="user_profile"
      />

      {currentModal === 1 && (
        <MiniModal
          anchorRef={iconRef1}
          modalProperties={{ width: 168, height: 108 }}
          overlay={{
            isOverlay: true,
            zIndexOverlay: 99,
          }}
          childContent={
            <>
              <Typography as="p">
                This is some content inside the first modal.
              </Typography>
            </>
          }
          isIconModel={true}
          isAnimated={true}
          firstAnchorRef={iconRef1}
          anchorLeftDistanceForWrapper={0}
          extraTopSpace={{ normalModal: 5 }}
        />
      )}

      <Icon
        className="ff-mini-edit-model-icon"
        width={16}
        height={16}
        onClick={() => openModal(2)}
        ref={iconRef2}
        name="user_profile"
      />

      {currentModal === 2 && (
        <MiniModal
          anchorRef={iconRef2}
          modalProperties={{ width: 193, height: 128 }}
          childContent={
            <>
              <Typography as="p">
                This is some content inside the Second modal.
              </Typography>
            </>
          }
          isIconModel={true}
          isAnimated={true}
          firstAnchorRef={iconRef2}
          anchorLeftDistanceForWrapper={20}
          extraTopSpace={{ normalModal: 15 }}
        />
      )}

      <Icon
        className="ff-mini-edit-model-icon"
        width={16}
        height={16}
        onClick={() => openModal(3)}
        ref={iconRef3}
        name="user_profile"
      />

      {currentModal === 3 && (
        <MiniModal
          anchorRef={iconRef3}
          modalProperties={{ width: 168, height: 108 }}
          childContent={
            <>
              <Typography as="p">
                This is some content inside the third modal.
              </Typography>
            </>
          }
          isIconModel={true}
          isAnimated={true}
          firstAnchorRef={iconRef3}
          anchorLeftDistanceForWrapper={10}
          extraTopSpace={{ normalModal: 10 }}
        />
      )}
    </div>
  );
};
export const NormalModalWithLoop = () => {
  const { currentModal, openModal, closeModal } = useModal();

  const modelItems = [
    'one',
    'two',
    'three',
    'four',
    'three',
    'four',
    'four',
    'three',
    'four',
  ];
  const structuredArray = modelItems.map((value, index) => ({
    id: `${index + 1}`,
    value: value,
  }));

  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const getButtonPosition = (index: number) => {
    const button = buttonRefs.current[index];
    if (button) {
      const { top, left, height } = button.getBoundingClientRect();
      return { top: top + height, left };
    }
    return { top: 0, left: 0 };
  };

  return (
    <div className="ff-mini-modal-loop">
      {structuredArray.map((data, index) => (
        <div key={data.id} className="ff-mini-modal-loop-div">
          <p>{data.value}</p>
          <Button
            variant="primary"
            ref={(el) => (buttonRefs.current[index] = el)}
            onClick={() => openModal(Number(data.id))}
            id={data.id}
            label={data.id}
          />

          {currentModal === Number(data.id) && (
            <MiniModal
              anchorRef={(el) => (buttonRefs.current[index] = el)}
              id={data.id}
              modalProperties={{
                width: 168,
                height: 108,
                top: getButtonPosition(index).top,
                left: getButtonPosition(index).left,
              }}
              overlay={{
                isOverlay: true,
                zIndexOverlay: 99,
              }}
              childContent={
                <Typography as="p">
                  This is some content inside the modal for {data.value}.
                </Typography>
              }
              isIconModel={true}
              isAnimated={true}
              outSideClick={closeModal}
            />
          )}
        </div>
      ))}
    </div>
  );
};
export default meta;
