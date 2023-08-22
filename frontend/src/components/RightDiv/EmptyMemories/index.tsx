
const EmptyMemories = () => {
    return (
        <div className="flex flex-1 items-center justify-center">
        <p className="text-center leading-relaxed w-[360px]">
          Você ainda não registrou nenhuma lembrança, começe a{" "}
          <a
            href=""
            className="underline hover:text-gray-50 transition-colors"
          >
            criar agora
          </a>
        </p>
      </div>
    )
}
export default EmptyMemories;