import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import ContactSection from "@/components/ContactSection";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <ContactSection onClose={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;

