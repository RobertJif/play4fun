import getConfigManager from './manager'

type EnvironmentConfigType = {
  API_BASE_URL: string
}
const envManager = getConfigManager<EnvironmentConfigType>('mini-game-environment')

const config = envManager.get()

export default config
