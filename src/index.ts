type Options = {
  development?: string;
  production?: string;
  test?: string;
}

type EnvPlugin = {
  isDev: () => boolean;
  isProd: () => boolean;
  isTest: () => boolean;
}

type VueObject = {
  prototype: {
    $env: EnvPlugin;
  }
}

export default {
  install: (Vue: VueObject, options: Options = {}): void => {
    const nodeEnv: string | undefined = process.env.NODE_ENV
    if (!nodeEnv) throw new Error('NODE_ENV is not defined.')

    const { development, production, test }: Required<Options> = {
      development: options.development ?? 'development',
      production: options.production ?? 'production',
      test: options.test ?? 'test'
    }

    const isDev = (): boolean => {
      return nodeEnv === development
    }

    const isProd = (): boolean => {
      return nodeEnv === production
    }

    const isTest = (): boolean => {
      return nodeEnv === test
    }

    Vue.prototype.$env = {
      isDev,
      isProd,
      isTest
    }
  }
}
