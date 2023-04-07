import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { TopSagas } from '../TopData';

function IndexList() {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex bg-orange-200 p-2 rounded-md text-orange-900 text-center justify-center">
            ¿Quieres ir a un puesto en particular?
            <ChevronRightIcon className={`${open ? 'rotate-90 transform' : ''} w-6 h-6`} />
          </Disclosure.Button>
          <Disclosure.Panel as="nav" className="bg-slate-200 rounded-md mt-2 dark:bg-slate-700 dark:text-slate-200">
            <ul className="flex flex-col">
              {TopSagas.map((saga) => (
                <li
                  key={saga.ranking}
                  className={`hover:bg-slate-300 p-2 dark:hover:bg-slate-800 ${saga.ranking === 10 && 'rounded-t-md'} ${
                    saga.ranking === 1 && 'rounded-b-md'
                  }`}
                >
                  <a href={`#top${saga.ranking}`} className="w-full h-full inline-block">
                    <span className="text-slate-900 dark:text-slate-100">
                      Top {saga.ranking}: {saga.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default IndexList;
