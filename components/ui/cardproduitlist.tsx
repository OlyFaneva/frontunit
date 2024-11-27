import React from "react";
import Card from "./cardproduit";

type CardGroup = {
  title: string;
  cards: {
    image: string;
    details: string;
    variant: "petit-carrée" | "rectangle" | "carrée-plein";
  }[];
  footer: string;
};

type CardListProps = {
  groups: CardGroup[];
};

const CardList: React.FC<CardListProps> = ({ groups }) => {
  return (
    <div className="space-y-6 px-4 bg-[#FDEFF1] rounded-sm w-[402px] mx-3 h-[450px] pt-5">
      {groups.map((group, index) => (
        <div key={index}>
          {/* Titre du groupe */}
          <h2 className="text-xl font-semibold w-[250px] text-gray-700 mb-4">
            {group.title}
          </h2>
          <div className="flex flex-col gap-3">
            {(() => {
              const result: JSX.Element[] = [];
              let buffer: typeof group.cards = [];
              group.cards.forEach((card, cardIndex) => {
                if (card.variant === "rectangle") {
                  if (buffer.length > 0) {
                    result.push(
                      <div
                        key={`chunk-${cardIndex}`}
                        className="flex gap-5"
                      >
                        {buffer.map((item, bufferIndex) => (
                          <Card
                            key={`buffer-${bufferIndex}`}
                            image={item.image}
                            details={item.details}
                            variant={item.variant}
                          />
                        ))}
                      </div>
                    );
                    buffer = [];
                  }
                  result.push(
                    <div
                      key={`rectangle-${cardIndex}`}
                      className="flex justify-center w-full"
                    >
                      <Card
                        image={card.image}
                        details={card.details}
                        variant={card.variant}
                      />
                    </div>
                  );
                } else {
                  buffer.push(card);
                  if (buffer.length === 2) {
                    result.push(
                      <div
                        key={`chunk-${cardIndex}`}
                        className="flex gap-5"
                      >
                        {buffer.map((item, bufferIndex) => (
                          <Card
                            key={`buffer-${bufferIndex}`}
                            image={item.image}
                            details={item.details}
                            variant={item.variant}
                          />
                        ))}
                      </div>
                    );
                    buffer = [];
                  }
                }
              });

              if (buffer.length > 0) {
                result.push(
                  <div key="last-chunk" className="flex mx-auto gap-5">
                    {buffer.map((item, bufferIndex) => (
                      <Card
                        key={`buffer-last-${bufferIndex}`}
                        image={item.image}
                        details={item.details}
                        variant={item.variant}
                      />
                    ))}
                  </div>
                );
              }

              return result;
            })()}
          </div>
          <p className="text-[#DA1A31] text-[15px] relative mt-2 font-semibold pl-2">
            {group.footer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CardList;
