import { create } from 'zustand';

interface VisibilityState {
  visibility: boolean;
}

interface VisibilityActions {
  toggleVisibility: () => void;
}

export const columnVisibility = create<VisibilityState & VisibilityActions>(
  (set: any) => ({
    visibility: false,
    toggleVisibility: () =>
      set((state: VisibilityState) => ({ visibility: !state.visibility }))
  })
);
