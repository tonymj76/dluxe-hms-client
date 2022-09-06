import { ComponentType } from 'react';
import { NextPageContext } from 'next';

function withNamespacesRequired<T>(
  WrappedComponent: ComponentType<T>,
  getStaticProps?: (ctx: NextPageContext) => any
): ComponentType<T> {
  function NamespacesRequiredWrapper(props: any) {
    return <WrappedComponent {...props} />;
  }

  NamespacesRequiredWrapper.getStaticProps = async (ctx: NextPageContext) => {
    const namespaces = [
      'residence'
    ];

    if (getStaticProps) {
      const result = await getStaticProps(ctx);

      if (result) {
        return { namespacesRequired: namespaces, ...result };
      }
    }

    return { namespacesRequired: namespaces };
  };

  return NamespacesRequiredWrapper;
}

export default withNamespacesRequired;
