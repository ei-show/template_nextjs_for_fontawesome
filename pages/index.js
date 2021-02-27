import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <>
      <h1>lean fontAwesome</h1>
      <FontAwesomeIcon icon="window-maximize" />
      <FontAwesomeIcon icon="wifi" size="2x"/>
      <FontAwesomeIcon icon={['fab', 'youtube']} size="2x" fixedWidth />
      <FontAwesomeIcon className="" icon="headset" size="2x" fixedWidth />

    </>
  )
}
