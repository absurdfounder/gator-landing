import InstallStepImage from '@/components/download/InstallStepImage';

export function OpenInstallerIllustration() {
  return (
    <InstallStepImage
      src="/images/download/windows/step-1-open-downloads.png"
      alt="Open the Gator installer from your Downloads folder"
    />
  );
}

export function RunInstallerIllustration() {
  return (
    <InstallStepImage
      src="/images/download/windows/step-2-run-installer.png"
      alt="Run the Gator installer and follow the setup steps"
    />
  );
}

export function OpenFromAppsIllustration() {
  return (
    <InstallStepImage
      src="/images/download/windows/step-3-open-from-apps.png"
      alt="Open Gator from Settings or the Start menu"
    />
  );
}
