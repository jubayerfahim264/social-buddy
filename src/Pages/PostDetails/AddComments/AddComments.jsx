import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
  Field,
  Input,
  Label,
  Textarea,
} from "@headlessui/react";
import CloseIcon from "@mui/icons-material/Close";
import clsx from "clsx";

export default function AddComments({ handleClose, open }) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        className="fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-closed:opacity-0"
        transition>
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12 rounded-2xl">
            <DialogTitle className="font-bold">Add your comments</DialogTitle>
            {/* ================= */}
            <Field>
              <Label className="text-sm/6 font-medium text-zinc-700">
                Name
              </Label>
              <Description className="text-sm/6 text-zinc-500">
                Use your real name so people will recognize you.
              </Description>
              <Input
                className={clsx(
                  "mt-3 block w-full rounded-lg border px-3 py-1.5 text-sm/6 ",
                  "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25",
                )}
                name="full_name"
                type="text"
              />
              {/* ==================== */}
              <Label className="text-sm/6 font-medium text-zinc-700 mt-4">
                Description
              </Label>
              <Description className="text-sm/6 text-zinc-500">
                This will be shown under the product title.
              </Description>
              <Textarea
                className={clsx(
                  "mt-3 block w-full resize-none rounded-lg border  px-3 py-1.5 text-sm/6",
                  "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25",
                )}
                rows={3}
              />
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 my-2 w-full rounded-2">
                Submit
              </button>
            </Field>
            <div className="flex gap-4">
              <button onClick={handleClose}>
                <CloseIcon className="text-red-600" />
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}
